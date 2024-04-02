package com.xiaou.controller;

import com.xiaou.entity.User;
import org.redisson.Redisson;
import org.redisson.api.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Random;

@RestController
public class RedisTestController {

    @Resource
    private RedissonClient redissonClient;
    /**
     * 获取当前用户
     */
    @GetMapping("/current")
    public Object getCurrentUser(HttpServletRequest request) {
        Object userObj = request.getSession().getAttribute("USER_LOGIN_STATE");
        return userObj;
    }
    /**
     * 限流
     */
    public void doRateLimit(String key) {
        RRateLimiter rRateLimiter = redissonClient.getRateLimiter(key);
        //rate是每个时间单位允许访问几次 rateInterval就是时间单位
        rRateLimiter.trySetRate(RateType.OVERALL, 2, 1, RateIntervalUnit.SECONDS);
        //每当一个操作来了之后,去请求一个令牌
        boolean canOp = rRateLimiter.tryAcquire(1);
        if (!canOp) {
            throw new RuntimeException("当前访问过于频繁");
        }
    }


    /**
     * 抽奖
     * @return
     */
    @GetMapping("/lucky-draw")
    public String luckyDraw() {
        try {
            // 获取奖池和参与者列表
            RList<String> prizePool = redissonClient.getList("prize_pool");
            RList<String> participants = redissonClient.getList("participants");

            // 进行抽奖
            String winner = drawWinner(prizePool, participants);

            // 返回抽奖结果
            return " The winner is: " + winner;
        } finally {
            // 关闭 Redisson 客户端连接
            redissonClient.shutdown();
        }
    }

    // 进行抽奖
    private static String drawWinner(RList<String> prizePool, RList<String> participants) {
        // 从奖池中随机选择一个奖品
        String prize = prizePool.get(new Random().nextInt(prizePool.size()));

        // 从参与者列表中随机选择一个中奖者
        String winner = participants.get(new Random().nextInt(participants.size()));

        // 移除中奖者并返回
        participants.remove(winner);
        return "Winner: " + winner + ", Prize: " + prize;
    }


}
