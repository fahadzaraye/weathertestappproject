import React, { createRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList } from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { FontSize } from '../Utils/Theme';

const Dropdown = ({ label, icon, ...props }) => {

  const Icon = icon;

  const { placeholder, items, value, onSelectItem, displayValue = "Text", disabled, style } = props;

  const [itemList, setItemList] = useState(items);
  const [defaultValue, setDefaultValue] = useState(value);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnPressDropdown = () => {
    setModalVisible(!modalVisible);
  }

  const handleOnSelectItem = (item) => {
    setModalVisible(false);
    if (onSelectItem) {
      onSelectItem(item)
    }
  }

  useEffect(() => {
    setItemList(items);
  }, [items]);

  useEffect(() => {
    setDefaultValue(value);
  }, [value]);

  return (
    <View>
      <View style={styles.borderBox}>
        <TouchableOpacity disabled={disabled} onPress={handleOnPressDropdown} activeOpacity={0.7} style={[styles.borderBoxTouchArea, { borderBottomLeftRadius: modalVisible ? 0 : 10, borderBottomRightRadius: modalVisible ? 0 : 10, }]}>
          {icon && (
            <View style={styles.iconBox2}>
              <Icon />
            </View>
          )}
          {defaultValue && defaultValue != '' ?
            <Text numberOfLines={1} style={styles.textBox}>{defaultValue}</Text>
            :
            <Text numberOfLines={1} style={[styles.textBox, { color: 'gray' }]}>{placeholder}</Text>
          }
          <View style={modalVisible ? styles.iconBox : styles.iconBoxRotate}>
            <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Circle r="8.68207" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8.95074 9.01587)" fill="#099ff6" />
              <Path d="M8.8928 6.87063C8.80375 6.88347 8.72118 6.92406 8.65651 6.98654L5.09072 10.4097C5.00068 10.4857 4.94596 10.5956 4.93949 10.7131C4.93302 10.8308 4.97531 10.946 5.05649 11.0314C5.13758 11.1169 5.2504 11.165 5.36819 11.1646C5.48609 11.1642 5.59852 11.1153 5.67911 11.0292L8.95072 7.88675L12.2223 11.0292C12.3029 11.1153 12.4153 11.1642 12.5332 11.1646C12.651 11.165 12.7639 11.1169 12.8449 11.0314C12.9261 10.946 12.9684 10.8308 12.9619 10.7131C12.9555 10.5955 12.9008 10.4857 12.8107 10.4097L9.24493 6.98654C9.15121 6.8965 9.02167 6.85382 8.89283 6.87073L8.8928 6.87063Z" fill="white" />
            </Svg>
          </View>
        </TouchableOpacity>
        {modalVisible &&
          <View style={styles.DropdownItemsContainer}>
            <View style={styles.MainContainer}>
              <FlatList
                initialNumToRender={5}
                nestedScrollEnabled={true}
                maxToRenderPerBatch={10}
                style={{ maxHeight: 160 }}
                data={itemList}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity onPress={() => handleOnSelectItem(item)} key={`drop-down-item-${index}`}>
                      <View style={styles.DropdownItemArea}>
                        <Text style={styles.DropdownItemText}>{item[displayValue]}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                }}
                ListEmptyComponent={() => {
                  return (
                    <View style={styles.DropdownItemArea}>
                      <Text style={styles.DropdownItemText}>No Data Avialable</Text>
                    </View>
                  )
                }}
                keyboardShouldPersistTaps='handled'
                keyExtractor={item => item.Value}
              />
            </View>
          </View>
        }
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  borderBox: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D6DBEE',
    shadowColor: Platform.OS == "ios" ? '#D6DBEE' : 'gray',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white'
  },
  borderBoxTouchArea: {
    borderRadius: 10,
    minHeight: 45,
    marginVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBox: {
    flexGrow: 1,
    height: 44,
    lineHeight: 44,
    fontSize: FontSize.medium,
    color: 'black',
    textAlignVertical: 'center',
    width: '80%',
    overflow: 'hidden',
    paddingHorizontal: 5,
    alignSelf: 'center',
    textAlign: 'left',
    backgroundColor: 'transparent'
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    height: 30,
    width: 30,
  },
  iconBoxRotate: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    height: 30,
    width: 30,
    transform: [{ rotate: "180deg" }]
  },
  iconBox2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  MainContainer: {
    zIndex: 99999,
    maxHeight: 300,
    width: '100%'
  },
  MainTitleArea: {
    padding: 10,
  },
  MainTitleText: {
    color: '#2B736F',
    fontSize: 18
  },
  DropdownItemArea: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  DropdownItemText: {
    color: '#3E3E3E',
    fontSize: 13,
    flexGrow: 1,
    textAlign: 'left'
  },
  DropdownItemsContainer: {
    width: '100%',
    paddingHorizontal: 0,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 0,
    borderTopWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
    borderColor: '#D6DBEE',
  },
  InputLabel: {
    fontSize: FontSize.small,
    color: 'black',
    textAlign: 'left'
  },
});

export default Dropdown;
