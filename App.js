import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const YourComponent = () => {
  // State to store details in each box
  const [boxDetails, setBoxDetails] = useState([
    { value: 0, text: 'Some details' },
    { value: 0, text: 'More details' },
    { value: 0, text: 'Additional details' },
  ]);

  // Function to handle the + and - button clicks
  const handleButtonClick = (index, operation) => {
    // Copy the array to avoid directly mutating the state
    const newBoxDetails = [...boxDetails];

    if (operation === 'add') {
      newBoxDetails[index].value += 1;
    } else if (operation === 'subtract' && newBoxDetails[index].value > 0) {
      newBoxDetails[index].value -= 1;
    }

    // Update the state with the new values
    setBoxDetails(newBoxDetails);
  };

  return (
    <View>
      {/* Display boxes with details, text, image, and buttons */}
      {boxDetails.map((box, index) => (
        <View key={index} style={{ borderWidth: 1, height: 150, padding: 10, margin: 5, position: 'relative' }}>
          <Text>{`Box ${index + 1}: ${box.value}`}</Text>

          {/* Read-only text for details */}
          <Text>{box.text}</Text>

          {/* Image component for image */}
          <Image
            source={{ uri: box.image }}
            style={{ width: 100, height: 100, marginVertical: 10 }}
          />

          {/* Buttons for + and - with reduced width */}
          <View style={{ position: 'absolute',marginLeft:300, bottom: 10, left: 10 }}>
            <TouchableOpacity
              onPress={() => handleButtonClick(index, 'add')}
              style={{ width: 50, backgroundColor: 'lightgreen', padding: 10, marginBottom: 5 }}>
              <Text style={{ textAlign: 'center' }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonClick(index, 'subtract')}
              style={{ width: 50, backgroundColor: 'lightcoral', padding: 10 }}>
              <Text style={{ textAlign: 'center' }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default YourComponent;
