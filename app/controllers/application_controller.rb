class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

#   skip_before_action :authorize, only: [:index]

  private

  def authorize
    @current_artist = Artist.find_by(id: session[:artist_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_artist
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
