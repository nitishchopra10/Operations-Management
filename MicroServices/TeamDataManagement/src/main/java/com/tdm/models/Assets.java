/*


@author: tsharma

*/
package com.tdm.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="assets",schema="opm")
public class Assets implements Serializable {

		/**
	 * 
	 */
	private static final long serialVersionUID = -4141687123148161674L;

		private String assetType;
		
		private Long assetId ;
		
		private String number;
		
		private String details;
		
		private String status;
		
		private boolean deleted;
		

		@Column(name = "DeviceType")
		public String getAssetType() {
			return assetType;
		}
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name = "ID")
		public Long getAssetId() {
			return assetId;
		}
		@Column(name = "AssetID")
		public String getNumber() {
			return number;
		}
		@Column(name = "AssetDetails")
		public String getDetails() {
			return details;
		}
		@Column(name = "AssetStatus")
		public String getStatus() {
			return status;
		}
		@Column(name = "Deleted")
		public boolean isDeleted() {
			return deleted;
		}
		

		public void setAssetType(String assetType) {
			this.assetType = assetType;
		}

		public void setAssetId(Long assetId) {
			this.assetId = assetId;
		}

		public void setNumber(String number) {
			this.number = number;
		}

		public void setDetails(String details) {
			this.details = details;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public void setDeleted(boolean deleted) {
			this.deleted = deleted;
		}

		
}
