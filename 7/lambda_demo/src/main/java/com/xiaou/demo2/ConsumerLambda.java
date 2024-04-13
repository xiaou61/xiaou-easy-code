package com.xiaou.demo2;

import java.util.function.Consumer;

public class ConsumerLambda {
    public static void main(String[] args) {
        consumerString(str -> System.out.println(str));
        consumerString(
                s -> System.out.println(s.toUpperCase()),
                s -> System.out.println(s.toLowerCase())
        );
    }

    static void consumerString(Consumer<String> function) {
        function.accept("Hello");
    }

    static void consumerString(Consumer<String> first, Consumer<String> sec) {
        first.andThen(sec).accept("Hello World");
    }

}
