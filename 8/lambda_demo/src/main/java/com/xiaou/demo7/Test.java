package com.xiaou.demo7;

public class Test {
    public static void main(String[] args) {
        Method method = new Method();
        printString(method::printUpperCassString);
    }

    public static void printString(Printable printable) {
        printable.print("Hello");
    }
}
