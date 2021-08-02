class ChatroomController < ApplicationController

  def home
    @message = Message.all
    
  end

end