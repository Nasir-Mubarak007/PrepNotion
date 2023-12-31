import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Checkbox, FAB, List, RadioButton, Searchbar } from "react-native-paper";
import { useState } from "react";

import CoursesHeader from "./CoursesHeader";
import SelectBar from './ui/SelectBar'

const Year = [
    {name:'2002/2003',value:'2002/2003'},
    {name:'2003/2004',value:'2003/2004'},
    {name:'2004/2005',value:'2004/2005'},
    {name:'2005/2006',value:'2005/2006'},
    {name:'2006/2007',value:'2006/2007'},
    {name:'2007/2008',value:'2007/2008'},
    {name:'2008/2009',value:'2008/2009'},
    {name:'2009/2010',value:'2009/2010'},
    {name:"2010/2011",value:"2010/2011",},
    {name:"2011/2012",value:"2011/2012",},
    {name:"2012/2013",value:"2012/2013",},
    {name:"2013/2014",value:"2013/2014",},
    {name:"2014/2015",value:"2014/2015",},
    {name:"2015/2016",value:"2015/2016",},
    {name:"2016/2017",value:"2016/2017",},
    {name:"2017/2018",value:"2017/2018",},
    {name:"2018/2019",value:"2018/2019",},
    {name:"2019/2020",value:"2019/2020",},
    {name:"2020/2021",value:"2020/2021",},
    {name:"2021/2022",value:"2021/2022",},
  ];





const Years = ({ navigation}) => {

    function handleTap(exam) {
        switch (exam) {
          case '2002/2003':
            navigation.navigate("");
            break;

          case '2003/2004':
            return navigation.navigate("");
            break;

          case '2004/2005':
            return navigation.navigate("");
            break;
          
          case '2005/2006':
            return navigation.navigate("");
            break;
          default:
            alert("not handled");
        }
      }

  return (
    <View style={{ marginTop:20, gap: 20, flex: 1 }}>
      {/* <CoursesHeader navigation={navigation} route={route} /> */}
      <View style={{ marginHorizontal: 16 }}>
        <Searchbar
          placeholder="Search for any Subject"
          style={{ height: 48, alignItems: "center", borderRadius: 5 }}
        />
      </View>
      <View style={{ marginHorizontal: 16, gap: 15 }}>
        <Text style={styles.title}>Subjects</Text>

        <FlatList
          data={Year}
          renderItem={({ item }) => <SelectBar item={item.name} onTap={() => handleTap(item.value)} />}
          contentContainerStyle={{ gap: 15, paddingBottom: 357 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  );
};

export default Years;

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'500'
    }
});
