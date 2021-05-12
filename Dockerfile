FROM ruby:2.6.5

RUN mkdir /app
WORKDIR /app

COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install

ADD . /app