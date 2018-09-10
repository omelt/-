package com.mifengwo.factory;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.Properties;
import java.util.ResourceBundle;

public class Factory {
    private   static Properties bundle;

    static {
        //ResourceBundle 专门用于java国际化 默认获取src下的资源文件（文件名）
        bundle = new Properties();
        try {
            bundle.load(Factory.class.getClassLoader().getResourceAsStream("instance.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static <T>T getInstance(String key,Class<T> classType){
        String className=bundle.getProperty(key);

        try {
            Method method = Class.forName(className).getMethod("getInstance");
            return (T) method.invoke(null);
        } catch (Exception e) {
            System.out.println(e);
            throw  new RuntimeException(e);
        }
    }

}
