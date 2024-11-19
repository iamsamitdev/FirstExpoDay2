// rnfs
import React from 'react'
import { Text, View } from 'react-native'
import MyStyle from '@/constants/Style'

export default function About() {
  return (
    <View>
        {/* ตรงนี้คือการใส่ข้อความแล้วไปทำการโหลด css จากข้างนอกเข้ามา */}
      <Text style={MyStyle.text}>About Page</Text>
    </View>
  )
}