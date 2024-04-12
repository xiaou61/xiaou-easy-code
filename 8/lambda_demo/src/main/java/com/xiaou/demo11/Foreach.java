package com.xiaou.demo11;

import java.util.stream.Stream;

public class Foreach {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("a1", "a2", "b1", "c2", "c1");
        stream.forEach(System.out::println);
    }
}
