package com.xiaou.demo2;

import java.util.function.Predicate;

public class PredicateLambda {
    public static void main(String[] args) {

        // 传统写法
        Predicate<Integer> predicate = new Predicate<Integer>() {
            @Override
            public boolean test(Integer t) {
                return t > 10;
            }
        };
        System.out.println(predicate.test(15));

        // lambda写法
        Predicate<Integer> predicate1 = (t) -> t > 10;
        System.out.println(predicate1.test(15));
    }
}
