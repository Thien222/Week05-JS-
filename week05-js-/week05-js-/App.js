import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('blue'); 
  const [modalVisible, setModalVisible] = useState(false); 

  
  const colors = {
    blue: require('./assets/vs_blue.png'),
    black: require('./assets/vs_black.png'),
    red: require('./assets/vs_red.png'),
    silver: require('./assets/vs_silver.png'),
  };


  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setModalVisible(false); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={colors[selectedColor]} style={styles.image} />
        </View>
        <Card.Content>
          <Title style={styles.title}>Điện Thoại Vsmart Joy 3</Title>
          <Text style={styles.rating}>⭐⭐⭐⭐⭐ (828 đánh giá)</Text>
          <Paragraph style={styles.price}>
            1.790.000 đ <Text style={styles.oldPrice}>1.790.000 đ</Text>
          </Paragraph>
          <Text style={styles.subText}>
            Ổ ĐÂU RẺ HƠN HOÀN TIỀN
            <Text style={styles.questionMark}> ?</Text>
          </Text>
        </Card.Content>

        
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>

        <Card.Actions style={styles.actions}>
          <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
            <Text style={styles.buyButtonText}>CHỌN MUA</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

    
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Chọn một màu bên dưới:</Text>
            <View style={styles.colorOptions}>
              <Pressable
                style={[styles.colorOption, { backgroundColor: '#ADD8E6' }]} 
                onPress={() => handleColorSelect('blue')}
              />
              <Pressable
                style={[styles.colorOption, { backgroundColor: 'red' }]}
                onPress={() => handleColorSelect('red')}
              />
              <Pressable
                style={[styles.colorOption, { backgroundColor: 'black' }]}
                onPress={() => handleColorSelect('black')}
              />
              <Pressable
                style={[styles.colorOption, { backgroundColor: 'silver' }]} 
                onPress={() => handleColorSelect('silver')}
              />
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>XONG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    textAlign: 'center',
    marginVertical: 8,
  },
  price: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d50000',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  subText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
  },
  questionMark: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 16,
  },
  actions: {
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  colorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  colorButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: '#d50000',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%', 
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  colorOptions: {
    width: '100%', 
    alignItems: 'center',
  },
  colorOption: {
    width: 100, 
    height: 100, 
    borderRadius: 10,
    marginVertical: 10,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#4169e1',
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
