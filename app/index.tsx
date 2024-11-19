// rnfs
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import MyStyle from '@/constants/Style'
import About from '@/components/About'

import { Link, useRouter } from 'expo-router'

export default function Index() {
    
    // สร้างตัวแปร router โดยใช้ useRouter() จาก expo-Router
    const router = useRouter()

    return (
        <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 50, fontWeight: 'bold' }]}>Expo App</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit </Text>
        <Text style={MyStyle.text}>Lorem ipsum dolor sit.</Text>

        {/* Load Componnet About */}
        <About />

        {/* Link ไปยังหน้า Contact */}
        <Link href='/contact?name=Samit&company=ITGenius' style={MyStyle.text}>Click to Contact</Link>
        
        <Button
            title='Click to Contact with query string'
            // onPress={() => {console.log('Button Clicked')}}
            onPress={() => router.push('/contact?name=Samit&company=ITGenius')}
            // onPress={() => router.replace('/contact')}
            // onPress={() => router.navigate('/contact')}

            // router.push(path: string | object) เปลี่ยนหน้า และเก็บหน้าเก่าไว้จะสามารถกลับมาหน้าเดิมได้
            // router.replace(path: string | object)เปลี่ยนหน้าและลบหน้าเก่าทิ้งไป จะไม่สามารถกดปุ่ม Back กลับมาหน้าเดิมได้
            // router.back() คือการกลับหน้าก่อนหน้า เหมือนกับการกดปุ่ม "Back" ในเบราว์เซอร์
            // router.navigate(path: string | object) คล้ายกับ router.push() ไปยังหน้าใหม่โดยไม่ต้องการจัดการสแต็กเพิ่มเติม
            // router.reload() คือการโหลดหน้าเดิมใหม่
        />

        <Text>&nbsp;</Text>

        <Button
            title='Go to Contact with Params'
            onPress={() => {
                router.push({
                    pathname: '/contact',
                    params: {
                        fullname: 'Samit',
                        email: 'samit@email.com',
                        tel: '0812345678',
                        company: 'ITGenius',
                    }
                })
            }}
        />

        <Text>&nbsp;</Text>

        <Button
            title='Go to User ID: 456'
            onPress={() => router.push('/user/456')}
        />

        <Text>&nbsp;</Text>

        <Button
            title='Go to User Profile'
            onPress={() => router.push('/user/profile')}
        />

        <Text>&nbsp;</Text>

        <Button
            title='Go to Not Found'
            onPress={() => router.push('/asfasfas')}
        />

        
        </View>
    )
}

const styles = StyleSheet.create({

  container: {
    flex: 1, // flex: 1 means take the whole screen
    backgroundColor: '#01921a',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 24,
    color: '#ffffff',
    margin: 10
  }

})