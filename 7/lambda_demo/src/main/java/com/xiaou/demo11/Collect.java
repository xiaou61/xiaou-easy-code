package com.xiaou.demo11;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Collect {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("李四");
        list.add("王五五");

        Stream<String> stream = list.stream().filter(s -> s.length() > 2);

        List<String> collect = stream.collect(Collectors.toList());
        System.out.println(collect);

        Set<Integer> set = new HashSet<>();
        set.add(10);
        set.add(20);
        set.add(30);
        set.add(50);
        Stream<Integer> integerStream = set.stream().filter(s -> s > 20);
        Set<Integer> collect1 = integerStream.collect(Collectors.toSet());
        System.out.println(collect1);

        String[] strArray = {"张三,30", "李四,35", "王五,20"};
        Stream<String> stringStream = Stream.of(strArray).filter(s -> Integer.parseInt(s.split(",")[1]) > 28);
        Map<String, Integer> collect2 = stringStream.collect(Collectors.toMap(
                s -> s.split(",")[0],
                s -> Integer.parseInt(s.split(",")[1])
        ));
        System.out.println(collect2);
    }
}
