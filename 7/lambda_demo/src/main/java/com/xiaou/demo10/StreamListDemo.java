package com.xiaou.demo10;

import java.util.ArrayList;
import java.util.List;

public class StreamListDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("张三丰");
        list.add("张学友");
        list.add("张伟");
        list.stream()
                .filter(name -> name.startsWith("张"))
                .filter(name -> name.length() == 3)
                .forEach(System.out::println);
    }
}
