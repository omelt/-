package com.mifengwo.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class  SearchPageInit<T>  {
    private Map<String,Integer> mapCount=new HashMap<>();
    private List<T> list;
    private String state;

    public static int pageItems=10;

    public SearchPageInit(int nowPage, List<T> plist){

        int allCount=plist.size();
        int pageNums=plist.size()%pageItems==0?allCount/pageItems:allCount/pageItems + 1;

        if (nowPage<1) nowPage=1;
        if (nowPage>pageNums) nowPage=pageNums;


        int to_start=nowPage-2;
        int to_end=nowPage+2;
        if (to_start<1) to_start=1;
        if (to_end>pageNums) to_end=pageNums;


        mapCount.put("dataCount",allCount);
        mapCount.put("nowPage",nowPage);
        mapCount.put("maxPage",pageNums);
        mapCount.put("start",to_start);
        mapCount.put("end",to_end);

        int start = (nowPage-1)*pageItems;
        int end=start+pageItems;
        if(end>plist.size()) end=plist.size();

        this.list=plist.subList(start,end);
    }

    @Override
    public String toString() {
        return "SearchPageInit{" +
                "mapCount=" + mapCount +
                ", list=" + list +
                ", state=" + state +
                '}';
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Map<String, Integer> getMapCount() {
        return mapCount;
    }

    public void setMapCount(Map<String, Integer> mapCount) {
        this.mapCount = mapCount;
    }

}
