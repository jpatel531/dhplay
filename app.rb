require 'sinatra'

set :views, Proc.new { File.join(root, "views") }
set :public, Proc.new {File.join(root, "public")}

get '/' do 
	erb :"profile.html"
end

