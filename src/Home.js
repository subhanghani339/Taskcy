import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import user from '../src/assests/users.png'

const Home = (props) => {
  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 12}}>
        {/* <Header title="Hackathon" navigation={navigation} /> */}
        <View style={{ flexDirection: "row", justifyContent: "center", padding: 20 }}>
          <View style={{ marginEnd: 30, borderRadius: 25, borderColor: "#dbd6d6", borderWidth: 1, padding: 8 }}>
            {/* <CRIcon name="widgets" size={30} color="#002055" /> */}
            </View>
          <View style={{ marginEnd: 40, marginStart: 40, padding: 8 }}><Text style={{ fontSize: 20, fontWeight: "bold", color: "#002055" }}>Friday,26</Text></View>
          <View style={{ marginStart: 30, borderRadius: 25, borderColor: "#dbd6d6", borderWidth: 1, padding: 8 }}>
            {/* <CRIcon name="notifications" size={30} color="#002055" /> */}
            </View>
        </View>
        
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 28, color: "#002055", padding: 10, maxWidth: 260, marginLeft: 10 }}>Let's make a habits together 🙌</Text>
          </View>


          <View style={{ padding: 10 }} >
            <ScrollView horizontal={true} >
              <View style={{ borderWidth: 1, borderColor: '#756ef3' ,padding: 25, borderRadius: 18, backgroundColor: "#756ef3", marginEnd: 20 }}>
                <Text style={{ fontSize: 20, color: "white" }}>Application Design</Text>
                <Text style={{ fontSize: 16, color: "white" }}>UI Design Kit</Text>

                <View style={{ flexDirection: "row", marginTop: 40 }}>
                  <View><Image source={user} style={{ width: 30, height: 30, marginRight: 30 }} /></View>
                  <View><Text style={{ color: "white" }} >Progress</Text></View>
                  <View style={{ marginLeft: 30 }}><Text style={{ color: "white" }}>50/80</Text></View>
                </View>
              </View>
              <View style={{ borderWidth: 1, padding: 25, borderRadius: 18, backgroundColor: "#fff", marginEnd: 20, borderColor: '#c1c4c9' }}>
                <Text style={{ fontSize: 20, color: "#002055" }}>Application Design</Text>
                <Text style={{ fontSize: 16, color: "#c1c4c9" }}>UI Design Kit</Text>

                <View style={{ flexDirection: "row", marginTop: 40 }}>
                  <View><Image source={user} style={{ width: 30, height: 30, marginRight: 30 }} /></View>
                  <View><Text style={{ color: "#002055" }} >Progress</Text></View>
                  <View style={{ marginLeft: 30 }}><Text style={{ color: "#002055" }}>50/80</Text></View>
                </View>
              </View>
            </ScrollView>
          </View>
          <ScrollView>
          <View style={{ padding: 10 }}>
            <View><Text style={{ color: "#002055", fontWeight: "bold", fontSize: 22, marginBottom: 15 }}>In Progress</Text></View>
            <View style={{ flexDirection: "row", borderWidth: 1, padding: 20, borderRadius: 10, borderColor: "#d3d3d3", marginBottom: 10 }}>
              <View style={{ flexDirection: "column", maxWidth: 180 }}>
                <View ><Text style={{ marginTop: 5 }}>Productivity Mobile App</Text></View>
                <View ><Text style={{ marginTop: 2, fontWeight: "bold", color: "#002055", fontSize: 18 }} >Create Detail Booking</Text></View>
                <View ><Text style={{ marginTop: 2 }}>2 min ago</Text></View>
              </View>
              <View style={{ marginHorizontal: 40 }}>
                <View>
                  {/* <Image source={percentLoading} style={{ width: 60, height: 60 }} /> */}
                  </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", borderWidth: 1, padding: 20, borderRadius: 10, borderColor: "#d3d3d3", marginBottom: 10 }}>
              <View style={{ flexDirection: "column", maxWidth: 180 }}>
                <View ><Text style={{ marginTop: 5 }}>Banking Mobile App</Text></View>
                <View ><Text style={{ marginTop: 2, fontWeight: "bold", color: "#002055", fontSize: 18 }} >Revision Home Page</Text></View>
                <View ><Text style={{ marginTop: 2 }}>5 min ago</Text></View>
              </View>
              <View style={{ marginHorizontal: 40 }}>
                <View>
                  {/* <Image source={percentLoading} style={{ width: 60, height: 60 }} /> */}
                  </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", borderWidth: 1, padding: 20, borderRadius: 10, borderColor: "#d3d3d3", marginBottom: 10 }}>
              <View style={{ flexDirection: "column", maxWidth: 180 }}>
                <View ><Text style={{ marginTop: 5 }}>Online Course</Text></View>
                <View ><Text style={{ marginTop: 2, fontWeight: "bold", color: "#002055", fontSize: 18 }} >Working On Langing Page</Text></View>
                <View ><Text style={{ marginTop: 2 }}>7 min ago</Text></View>
              </View>
              <View style={{ marginHorizontal: 40 }}>
                <View>
                  {/* <Image source={percentLoading} style={{ width: 60, height: 60 }} /> */}
                  </View>
              </View>
            </View>
          </View>

        </ScrollView>


      </View>
    </>
  )
}

export default Home