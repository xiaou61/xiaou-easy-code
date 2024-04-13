package com.xiaou.demo1;


public class LambdaTest {

    public static void main(String[] args) {
        //1.子类实现接口
        Factory factory = new SubClass();
        User user1 = (User) factory.getObject();
        System.out.println(user1);

        //2.匿名内部类
        factory = new Factory() {
            @Override
            public Object getObject() {
                return new User("xiaou", 18);
            }
        };
        User user2 = (User) factory.getObject();
        System.out.println(user2);

        //3.Lambda表达式
        factory = () -> {
            return new User("xiaou", 19);
        };
        //改进版
        factory = () -> new User("xiaou", 19);

        User User3 = (User) factory.getObject();
        System.out.println(User3);

        //lambda作为参数进行传递
        User user4 = getUserFormFactory(() -> {
            return new User("xiaou", 20);
        }, "User");
        System.out.println(user4);

        //lambda作为参数返回值
        Factory factory2 = getFactory();
        User user5 = (User) factory2.getObject();
        System.out.println(user5);
    }

    public static User getUserFormFactory(Factory factory, String beanName) {
        User object = (User) factory.getObject();
        if (object != null && object.getClass().getSimpleName().equals(beanName)) {
            return object;
        }
        return null;
    }

    public static Factory getFactory() {
        return () -> {
            return new User("xiaou", 21);
        };
    }
}
