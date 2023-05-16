import {setStatusBarBackgroundColor, StatusBar} from 'expo-status-bar';
import {Button, FlatList, Platform, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from "react";

const DATA = [
    {
    id: '9',
    title: 'Dorucak',
},
    {
        id: '10',
        title: 'Trcanje',
    },
    {
        id: '11',
        title: 'Fakultet',
    },
    {
        id: '12',
        title: 'Pauza',
    },
];

type ItemProps = {title:string};

const Item = ({title}: ItemProps) =>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

type CustomInputType ={
    placeholder: string;
}

const CustomInput = (props: CustomInputType) => {
    return (
        <View style={{ paddingVertical: 16 }}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
            />
        </View>
    );
};

const GlavniProgram = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#E8EAED'}}>
      <View style={styles.container}>
          <View style={styles.button}>
              <Button
                  title={"Add a new ToDo"}
                  color={Platform.OS === "ios" ? "white" : "transparent"}
                  onPress={() => {}}
              />
          </View>

          <Text style={styles.paragraph}></Text>
      </View>

            <FlatList
                data={DATA}
                renderItem={(item)=>{
                return(
                    <View style={styles.input}>
                        <Text>{item.item.id}</Text>
                        <Text>{item.item.title}</Text>
                    </View>
                )}
                }
                />
      </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
  },

    title:{
        fontSize:25,
        fontWeight: '800',
        padding: 20,
    },

    paragraph:{
        fontSize: 16,
        fontWeight: '500',
        padding: 16,
    },
    button: {
        margin: 50,
        backgroundColor:"gray",
  },
    input: {
        fontSize: 16,
        fontWeight: "400",
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 16,
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
export default GlavniProgram