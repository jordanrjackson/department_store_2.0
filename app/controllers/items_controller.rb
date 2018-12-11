class ItemsController < ApplicationController
  before_action :set_department, only: [:index, :create]
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def index
    render json: @department.items.all
  end

  def show
    render json: @item
  end

  def new
    @item = @department.items.new(item_params)
    if @item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def create
    @item = @department.items.new(item_params)
    if @item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def edit
    render partial: 'form'
  end

  def update
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item.destroy
  end

  private

    def set_department
      @department = Department.find(params[:department_id])
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description, :price, :department_id)
    end
end