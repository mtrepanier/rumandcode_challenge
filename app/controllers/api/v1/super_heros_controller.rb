module Api
  module V1
    class SuperHerosController < ApplicationController
      def index
        sortable = params[:sort].present? ? "#{params[:sort]} #{sort_direction}" : 'created_at desc'
        @page = params[:page] || 1
        @per = params[:per] || 10
        @super_heros = SuperHero.order(sortable)
        @super_heros = @super_heros.search(params[:hero_name]) if params[:hero_name].present?
        @super_heros = @super_heros.by_active(params[:active]) if params[:active].present?
        @total_items = @super_heros.count
        @super_heros = @super_heros.page(@page).per(@per)
      end

      private

      def sort_direction
        %w[asc desc].include?(params[:sort_dir]) ? params[:sort_dir] : 'asc'
      end
    end
  end
end
