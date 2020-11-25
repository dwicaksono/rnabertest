import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { IconArrowLeft } from '../../../assets'


const HeaderArrow = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <IconArrowLeft/>
        </TouchableOpacity>
    )
}

export default HeaderArrow

const styles = StyleSheet.create({
    container:{
        padding:18
    }
})
