import React, { useState } from 'react';

import Input from '../../components/Input';
import InputItem from '../../components/InputItem';
import TrucksModel, { CreateTruck } from '../../service/store/trucks';

import { Container, Button } from './styles';

const AddTruck: React.FC = ({ navigation }) => {
  const [form, setForm] = useState<CreateTruck>({} as CreateTruck);

  function handleUpdate(val: any) {
    setForm({ ...form, ...val });
  }

  async function handleCreate() {
    await TrucksModel.create({
      coefficient: form.coefficient,
      name: form.name,
      weight: form.weight,
    });

    console.log(await TrucksModel.findAll());

    navigation.goBack();
  }

  return (
    <Container>
      <InputItem label="Nome">
        <Input onChangeText={e => handleUpdate({ name: e })} />
      </InputItem>
      <InputItem label="Peso">
        <Input onChangeText={e => handleUpdate({ weight: e })} />
      </InputItem>
      <InputItem label="Coeficiênte Aérodinamico">
        <Input onChangeText={e => handleUpdate({ coefficient: e })} />
      </InputItem>

      <Button title="Cadastrar" onPress={() => handleCreate()} />
    </Container>
  );
};

export default AddTruck;
