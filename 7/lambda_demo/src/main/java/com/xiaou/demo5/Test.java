package com.xiaou.demo5;

public class Test {
    public static void main(String[] args) {
        int number = method(-10, Math::abs);
        System.out.println(number);
    }

    public static Integer method(int number, Calcable calcable) {
        return calcable.calsAbs(number);
    }
}
