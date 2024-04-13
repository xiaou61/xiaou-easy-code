package com.xiaou.demo11;

import java.util.*;
import java.util.stream.Stream;

public class GetStream {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Stream<String> stream1 = list.stream();

        Set<String> set = new HashSet<>();
        Stream<String> stream2 = set.stream();

        Map<String, String> map = new HashMap<>();
        Set<String> keySet = map.keySet();
        Stream<String> stream3 = keySet.stream();

        Collection<String> values = map.values();
        Stream<String> stream4 = values.stream();

        Set<Map.Entry<String, String>> entries = map.entrySet();
        Stream<Map.Entry<String, String>> stream5 = entries.stream();


        //把数组转换为Stream流
        Integer[] arr = {1, 2, 3, 4, 5};
        String[] arr2 = {"a", "b", "c"};

        Stream<Integer> stream6 = Stream.of(arr);

        Stream<String> stream7 = Stream.of(arr2);

    }
}
