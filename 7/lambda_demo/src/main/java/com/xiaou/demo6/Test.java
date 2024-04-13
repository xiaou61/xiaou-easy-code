package com.xiaou.demo6;

public class Test {
    public static void main(String[] args) {
        printName("xiaou", Person::new);
    }

    public static void printName(String name, PersonBuilder personBuilder) {
        Person person = personBuilder.builderPerson(name);
        System.out.println(person.getName());
    }
}
