require 'spec_helper'

RSpec.describe Player do
  let(:player) { Player.new("Alice") }

  describe '#initialize' do
    it 'sets the player name and score' do
      expect(player.name).to eq("Alice")
      expect(player.score).to eq(0)
    end
  end
  
  describe '#calculate_score' do
    context 'when dice have scoring combinations' do
      it 'calculates score for three 1s correctly' do
        dice_counts = { 1 => 3 }
        private_calculate_score = player.send(:calculate_score, dice_counts)
        expect(private_calculate_score).to eq(1000)
      end

      it 'calculates score for three 5s correctly' do
        dice_counts = { 5 => 3 }
        private_calculate_score = player.send(:calculate_score, dice_counts)
        expect(private_calculate_score).to eq(500)
      end

      it 'calculates score for mixed scoring dice' do
        dice_counts = { 1 => 1, 5 => 1, 2 => 3 }
        private_calculate_score = player.send(:calculate_score, dice_counts)
        expect(private_calculate_score).to eq(350)
      end

      it 'calculates score for non-scoring dice' do
        dice_counts = { 2 => 2, 4 => 1 }
        private_calculate_score = player.send(:calculate_score, dice_counts)
        expect(private_calculate_score).to eq(0)
      end
    end

    context 'when dice have non-scoring combinations' do
      it 'calculates score for no scoring dice correctly' do
        dice_counts = { 2 => 2, 4 => 1, 6 => 1 }
        private_calculate_score = player.send(:calculate_score, dice_counts)
        expect(private_calculate_score).to eq(0)
      end
    end
  end
end