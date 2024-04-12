package com.xiaou.demo2;

import java.util.Arrays;
import java.util.Comparator;

public class ComparatorLambda {
    public static void main(String[] args) {

        String[] arr = {"abc", "def", "ghi"};

        //匿名类方法
        Comparator<String> comparator = new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return o1.length() - o2.length();
            }
        };

        //lambda表达式
        Arrays.sort(arr, (o1, o2) -> o1.length() - o2.length());
        System.out.println(Arrays.toString(arr));

    }
}
