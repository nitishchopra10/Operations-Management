package com.opm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import com.opm.filters.AuthenticationFilter;
import com.opm.filters.CatchTokenFilter;

@EnableZuulProxy
@EnableEurekaClient
@EnableFeignClients
@SpringBootApplication
public class GatewayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServerApplication.class, args);
	}
	
	@Bean
	public AuthenticationFilter authenticationFilter() {
		return new AuthenticationFilter();
	}
	
	@Bean
	public CatchTokenFilter catchTokenFilter() {
		return new CatchTokenFilter();
	}
}
