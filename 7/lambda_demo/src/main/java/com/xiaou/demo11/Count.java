package com.xiaou.demo11;

import java.util.ArrayList;

public class Count {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        long count = list.stream().count();
        System.out.println(count);
    }
}
