Rails.application.routes.draw do
  mount StopIe::Engine => '/stop_ie'
  root :to => 'application#index'
end
