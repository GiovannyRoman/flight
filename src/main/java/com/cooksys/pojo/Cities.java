package com.cooksys.pojo;

public enum Cities {

	MEMPHIS("Memphis"), KNOXVILLE("KNOXVILLE"), CHATTANOOGA("CHATTANOOGA"), NASHVILLE("NASHVILLE");

	private String name;

	private Cities(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

}
