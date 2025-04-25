import { useEffect, useState } from "react";
import CardNumberInput from "../CardNumberInput";
import { expect, userEvent, within } from "@storybook/test";

export default {
  title: 'Payments/input/CardNumberInput',
  component: CardNumberInput
};

const Template = ({cardNumber, ...args}) => {
  const [cardNumberTest, setCardNumberTest] = useState(cardNumber);
  useEffect(() => {
    setCardNumberTest(cardNumber);
  }, [cardNumber]);
  return (
    <CardNumberInput cardNumber={cardNumberTest} setCardNumber={setCardNumberTest} {...args} />
  );
}

export const Default = Template.bind({});
Default.args = {
  cardNumber: '',
};
Default.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByRole('textbox');

  // 카드 번호 입력력
  await userEvent.type(input, '1234567894560123');

  // 결과가 마스킹된 값으로 나오는지 확인
  expect(input.value).toBe('1234-5678-●●●●-●●●●');
}