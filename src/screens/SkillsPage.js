import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';

const ListScreen = () => {
    const Skills = [
        {
            name: "JavaScript",
            level: "Expert",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
            name: "Python",
            level: "Intermediate",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
        },
        {
            name: "Node.Js",
            level: "Expert",
            logo: "https://pluspng.com/img-png/nodejs-logo-png--435.png"
        },
        {
            name: "React.Js",
            level: "Expert",
            logo: "https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png"
        },
        {
            name: "React Native",
            level: "Beginner",
            logo: "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png"
        },
        {
            name: "MongoDB",
            level: "Expert",
            logo: "https://mpng.pngfly.com/20180802/rea/kisspng-mongodb-nosql-document-oriented-database-portable-thessalon%C3%ADki-mongodb-user-group-thessalon%C3%ADki-g-5b639f094f4492.3705371015332554333247.jpg"
        },
        {
            name: "SQL",
            level: "Expert",
            logo: "https://banner2.cleanpng.com/20180802/vty/kisspng-clip-art-microsoft-azure-sql-database-microsoft-sq-skills-5b63119fd6c064.4634905815332192318796.jpg"
        },
        {
            name: "PL/SQL",
            level: "Expert",
            logo: "https://banner2.cleanpng.com/20180802/vty/kisspng-clip-art-microsoft-azure-sql-database-microsoft-sq-skills-5b63119fd6c064.4634905815332192318796.jpg"
        },
    ]
    return(
        <View>
            <Text style={styles.heading}>Skills</Text>
            <FlatList 
                data={Skills} 
                keyExtractor={(elm)=>{
                    return elm.name
                }}
                renderItem={(elm)=>{
                                return<View style={styles.listDiv}> 
                                        <Image style={styles.langLogo} source={{uri: elm.item.logo}}></Image>
                                        <Text style={styles.listStyle}>
                                            {elm.item.name}
                                        </Text>
                                    </View>
                            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listDiv:{
        flexDirection:'row', 
    },
    heading:{
        fontSize: 35,
        paddingHorizontal: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    listStyle:{
        paddingVertical: 20,
        paddingHorizontal: 5,
        fontSize: 25,
        borderBottomColor: "#c6c6c6", 
        borderBottomWidth: 0.5
    },
    langLogo:{
        width: 26,
        height: 26,
        margin: 20,
        alignSelf: "center"
    }
})

export default ListScreen;