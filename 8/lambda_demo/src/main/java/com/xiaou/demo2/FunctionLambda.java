package com.xiaou.demo2;


import java.util.function.Function;

public class FunctionLambda {
    public static void main(String[] args) {
        method((str) -> Integer.parseInt(str) + 10, (num) -> num * 2);
        String str = "xiaou,18";
        int ageNum = getAgeNum(str,
                s -> s.split(",")[1],
                s -> Integer.parseInt(s),
                s -> s + 10);
        System.out.println(ageNum);
    }

    static void method(Function<String, Integer> one, Function<Integer, Integer> two) {
        Integer num = one.andThen(two).apply("10");
        System.out.println(num);
    }

    static int getAgeNum(String str, Function<String, String> one, Function<String, Integer> two, Function<Integer, Integer> three) {
        return one.andThen(two).andThen(three).apply(str);
    }
}
