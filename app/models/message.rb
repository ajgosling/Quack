# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true
  
  belongs_to :user
  belongs_to :channel
  after_create_commit { MessageBroadcastJob.perform_later( self )}
end
