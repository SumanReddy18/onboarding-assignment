# spec/dice_spec.rb
require 'spec_helper'

RSpec.describe Dice do
  describe '#initialize' do
    it 'creates the correct number of dice' do
      dice = Dice.new(5)
      expect(dice.values.size).to eq(5)
    end
  end

  describe '#values' do
    it 'returns an array of dice values between 1 and 6' do
      dice = Dice.new(5)
      dice.values.each do |value|
        expect(value).to be_between(1, 6).inclusive
      end
    end
  end
end