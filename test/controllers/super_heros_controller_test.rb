require "test_helper"

class SuperHerosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get super_heros_index_url
    assert_response :success
  end
end
