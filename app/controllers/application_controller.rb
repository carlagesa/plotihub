class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authorize

    # def authorized
    #     return render json:{error: "Not Authorized"}, status: :unauthorized 
    #     unless session.include? :user_id
    # end

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
      end

end
