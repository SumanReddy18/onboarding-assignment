# spec/player_spec.rb
require 'spec_helper'

RSpec.describe Player do
  let(:player) { Player.new("Alice") }

  describe '#initialize' do
    it 'sets the player name and score' do
      expect(player.name).to eq("Alice")
      expect(player.score).to eq(0)
    end
  end

  describe '#take_turn' do
    before do
      allow_any_instance_of(Dice).to receive(:values).and_return([1, 1, 1, 1, 1])
      allow(player).to receive(:gets).and_return('n')
    end

    it 'adds to the player score based on dice rolls' do
      player.take_turn
      expect(player.score).to be > 0
    end

    it 'allows rolling non-scoring dice again' do
      allow_any_instance_of(Dice).to receive(:values).and_return([2, 2, 2, 1, 1])
      allow(player).to receive(:gets).and_return('y', 'n')
      player.take_turn
      expect(player.score).to be > 0
    end
  end
end