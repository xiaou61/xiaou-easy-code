package com.xiaou.demo10;

import java.util.ArrayList;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("张三");
        list.add("张三丰");
        list.add("张学友");
        list.add("张伟");

        // 遍历List集合
        List<String> listA = new ArrayList<>();
        for (String s : list) {
            if (s.startsWith("张")) {
                listA.add(s);
            }
        }

        //对listA进行处理
        List<String> listB = new ArrayList<>();
        for (String s : listA) {
            if (s.length() == 3) {
                listB.add(s);
            }
        }
        for (String s : listB) {
            System.out.println(s);
        }
    }
}
