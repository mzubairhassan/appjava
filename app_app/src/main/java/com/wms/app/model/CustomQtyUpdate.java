package com.wms.app.model;



// custom class to map to request object send by client.
// match same these below properties 
public class CustomQtyUpdate {
	private long prodId;
	private long wareId;
	private int qty;
	public long getProdId() {
		return prodId;
	}
	public void setProdId(long prodId) {
		this.prodId = prodId;
	}
	public long getWareId() {
		return wareId;
	}
	public void setWareId(long wareId) {
		this.wareId = wareId;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
}
