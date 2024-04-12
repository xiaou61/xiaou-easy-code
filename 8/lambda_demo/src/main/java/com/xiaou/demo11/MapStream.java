package com.xiaou.demo11;

import java.util.stream.Stream;

public class MapStream {
    public static void main(String[] args) {
        Stream<String> stream = Stream.of("1", "2", "3", "4", "5");
        Stream<Integer> stream2 = stream.map(Integer::parseInt);
        stream2.forEach(System.out::println);
    }
}
