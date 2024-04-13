package com.xiaou.demo11;

import java.util.stream.Stream;

public class Skip {
    public static void main(String[] args) {
        String[] arr = {"a", "b", "c", "d", "e", "f", "g", "h"};
        Stream<String> arr1 = Stream.of(arr);
        //跳过前三个元素
        arr1.skip(3).forEach(System.out::println);
    }
}
