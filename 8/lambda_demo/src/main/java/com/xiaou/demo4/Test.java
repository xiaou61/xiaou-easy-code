package com.xiaou.demo4;

import java.io.PrintStream;

public class Test {
    public static void main(String[] args) {
        //调用printString方法，参数是一个Printable类型的对象 也就是函数式接口
        printString(s -> {
            System.out.println(s);
        });

        PrintStream out = System.out;
        //使用lambda表达式简化
        printString(out::println);
    }

    public static void printString(Printable p) {
        p.print("Xiaou");
    }
}
