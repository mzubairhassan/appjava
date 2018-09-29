package com.wms.app.model;


// created for custom data
// so it map accordingly to fullfill need of request
// 
public class CustomDataInventory {
	private long id;
	private String warehname;         // warehouse name
	private int moq;         // minimum order qty
	private int rop;        // re-order point
	private int instock;
	private int qty;      // quantity
	private int avlqty;    // avaible quantity
	public String getWarehname() {
		return warehname;
	}
	public int getMoq() {
		return moq;
	}
	public void setMoq(int moq) {
		this.moq = moq;
	}
	public int getRop() {
		return rop;
	}
	public void setRop(int rop) {
		this.rop = rop;
	}
	public int getInstock() {
		return instock;
	}
	public void setInstock(int instock) {
		this.instock = instock;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public int getAvlqty() {
		return avlqty;
	}
	public void setAvlqty(int avlqty) {
		this.avlqty = avlqty;
	}
	public void setWarehname(String warehname) {
		this.warehname = warehname;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	
	
	

}
