package com.mifengwo.util;

import org.apache.commons.dbcp.BasicDataSource;

import javax.sql.DataSource;
import java.io.*;
import java.lang.reflect.Field;
import java.sql.*;
import java.util.*;

public class Dbutil {

    public static int update(String sql, Object... param) {
        Connection connection = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try {
            connection = getConnection();
            st = connection.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        int res = 0;
        try {
            get_Conn_State(st, param);

            res = st.executeUpdate();
            if(connection.getAutoCommit()) close(connection, st, rs);
            else close(st,rs);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return res;

    }

    public static List<Map<String, Object>> list(String sql, Object... param) {
        Connection connection = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try {
            connection = getConnection();
            st = connection.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        List<Map<String, Object>> res = new ArrayList<>();
        try {
            get_Conn_State(st, param);
            rs = st.executeQuery();
            ResultSetMetaData col = st.getMetaData();
            int n = col.getColumnCount();
            while (rs.next()) {
                Map<String, Object> temp = new HashMap<>();
                for (int i = 1; i <= n; i++)
                    temp.put(col.getColumnName(i), rs.getObject(i));
                res.add(temp);
            }


        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if(connection.getAutoCommit()) close(connection, st, rs);
                else close(st,rs);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return res;

    }

    public static Map<String, Object> get(String sql, Object... param) {
        Connection connection = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try {
            connection = getConnection();
            st = connection.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        Map<String, Object> res = new HashMap<>();
        try {
            get_Conn_State(st, param);
            rs = st.executeQuery();
            ResultSetMetaData col = st.getMetaData();
            if (rs.next()) {
                int n = col.getColumnCount();
                for (int i = 1; i <= n; i++)
                    res.put(col.getColumnName(i), rs.getObject(i));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if(connection.getAutoCommit()) close(connection, st, rs);
                else close(st,rs);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return res;

    }

    public static <T> T get(String sql, Class<T> cls, Object... param) {
        Connection connection = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try {
            connection = getConnection();
            st = connection.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        T singleObject = null;
        try {
            get_Conn_State(st, param);
            rs = st.executeQuery();
            //获取元数据对象
            ResultSetMetaData rsmd = rs.getMetaData();
            //获取字段的个数
            int columnCount = rsmd.getColumnCount();
            while (rs.next()) {
                singleObject = cls.newInstance();
                for (int i = 0; i < columnCount; i++) {
                    String columnName = rsmd.getColumnName(i + 1);//根据索引得到字段的名字
                    Object columnValue = rs.getObject(columnName);//获取字段对应的值
                    Field field = cls.getDeclaredField(columnName);
                    field.setAccessible(true);
                    field.set(singleObject, columnValue);
                }
            }
        } catch (Exception e) {

            e.printStackTrace();
        } finally {
            try {
                if(connection.getAutoCommit()) close(connection, st, rs);
                else close(st,rs);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return singleObject;

    }

    /**
     * 列表查询
     */
    public static <T> List<T> list(String sql, Class<T> cls, Object... param) {
        Connection connection = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try {
            connection = getConnection();
            st = connection.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        List<T> list = new ArrayList<T>();
        try {
            get_Conn_State(st, param);

            rs = st.executeQuery();
            ResultSetMetaData rsmd = rs.getMetaData();
            int columnCount = rsmd.getColumnCount();
            while (rs.next()) {
                T singleObject = null;
                singleObject = cls.newInstance();
                for (int i = 0; i < columnCount; i++) {
                    String columnName = rsmd.getColumnName(i + 1);
                    Object columdValue = rs.getObject(columnName);
                    Field field = cls.getDeclaredField(columnName);
                    field.setAccessible(true);
                    field.set(singleObject, columdValue);
                }
                list.add(singleObject);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        } finally {
            try {
                if(connection.getAutoCommit()) close(connection, st, rs);
                else close(st,rs);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return list;
    }


    private static BasicDataSource dataSource;

    static {
        try {
            Properties properties = new Properties();
            properties.load(Dbutil.class.getClassLoader().getResourceAsStream("MysqlConfig.properties"));
            dataSource = new BasicDataSource();
            dataSource.setDriverClassName(properties.getProperty("driver"));
            dataSource.setUrl(properties.getProperty("url"));
            dataSource.setUsername(properties.getProperty("username"));
            dataSource.setPassword(properties.getProperty("password"));
            dataSource.setInitialSize(Integer.parseInt(properties.getProperty("initsize")));
            dataSource.setMaxActive(Integer.parseInt(properties.getProperty("maxsize")));
            dataSource.setMinIdle(Integer.parseInt(properties.getProperty("minidle")));

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private Dbutil() {
    }

    private static void get_Conn_State(PreparedStatement st, Object... params) throws SQLException {
        for (int i = 0; i < params.length; i++) {
            st.setObject(i + 1, params[i]);
        }

    }


    private static void close(Connection connection, PreparedStatement st, ResultSet rs) {
        try {
            if (connection != null) {
                connection.close();
                threadLocal.remove();
            }
           close(st,rs);
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    private static void close( PreparedStatement st, ResultSet rs) {
        try {
            if (st != null) st.close();
            if (rs != null) rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    private static ThreadLocal<Connection> threadLocal = new ThreadLocal<Connection>();

    // 简化事务方法
    public static void startTransaction(TransactionProcess transactionProcess) throws Exception {
        try {
            start();
            // 调用包裹事务过程的接口的process方法
            transactionProcess.process();

            commit();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            try {
                rollback();
            } catch (SQLException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();

            }

            e.printStackTrace();

        } finally {
            try {
                close();
            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();

            }

        }
    }

    // 包裹事务的过程接口
    public interface TransactionProcess {
        void process() throws Exception;
    }


    // 获取Connection
    private static Connection getConnection() throws SQLException {
        Connection conn = threadLocal.get();
        if (conn == null) {
            conn = dataSource.getConnection();
            threadLocal.set(conn);
        }
        return conn;
    }

    // 开启事物
    private static void start() throws SQLException {
        getConnection().setAutoCommit(false);
    }

    // 提交事务
    private static void commit() throws SQLException {
        getConnection().commit();
    }

    // 回滚事务
    private static void rollback() throws SQLException {
        getConnection().rollback();
    }

    // 关闭资源
    private static void close() throws SQLException {
        getConnection().close();
        threadLocal.remove();
    }

}
