package com.xiaou.demo3;

import java.util.Arrays;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("掘", "金");
        stringList.forEach(s -> System.out.println(s));
    }
}
