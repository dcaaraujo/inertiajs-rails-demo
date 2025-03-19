# frozen_string_literal: true

class PagesController < ApplicationController
  def welcome
    render inertia: "Welcome", props: {
      title: "Hello team! 👋"
    }
  end
end
