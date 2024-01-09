import React, { useState } from "react";
import "../Assets/usermanage.css";

function UserManagement() {
  return (
      <div className="page-content snipcss-2kwPk">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">User List</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item active">User List</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card-user">
              <div className="card-body">
                <h4 className="card-title d-flex align-items-center justify-content-between">
                  &nbsp;
                  <a
                    href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/un-approved-users-list"
                    className="btn btn-primary waves-effect waves-light btn-sm"
                  >
                    Un-approved Users List
                  </a>
                </h4>
                <div className="table-responsive">
                  <div
                    id="userList_wrapper"
                    className="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div className="row" style={{justifyContent: 'space-between'}}>
                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="userList_length">
                          <label>
                            Show
                            <select
                              name="userList_length"
                              aria-controls="userList"
                              className="custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                      </div>
                      <div classNameName="col-sm-12 col-md-6">
                        <div
                          id="userList_filter"
                          classNameName="dataTables_filter"
                        >
                          <label>
                            Search:
                            <input
                              type="search"
                              classNameName="form-control form-control-sm"
                              placeholder=""
                              aria-controls="userList"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div classNameName="row">
                      <div classNameName="col-sm-12">
                        <table
                          id="userList"
                          classNameName="table table-bordered dataTable no-footer style-bjIWS"
                          role="grid"
                          aria-describedby="userList_info"
                          style={{width: '100%'}}
                        >
                          <thead>
                            <tr role="row">
                              <th
                                classNameName="sorting_desc style-9YPFk"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-sort="descending"
                                aria-label="#: activate to sort column ascending"
                                id="style-9YPFk"
                              >
                                #
                              </th>
                              <th
                                classNameName="sorting style-PSt3w"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="User Name: activate to sort column ascending"
                                id="style-PSt3w"
                              >
                                User Name
                              </th>
                              <th
                                classNameName="sorting style-WkqfU"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Mobile: activate to sort column ascending"
                                id="style-WkqfU"
                              >
                                Mobile
                              </th>
                              <th
                                classNameName="sorting style-ph6Dm"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="email: activate to sort column ascending"
                                id="style-ph6Dm"
                              >
                                email
                              </th>
                              <th
                                classNameName="sorting style-oU26w"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Date: activate to sort column ascending"
                                id="style-oU26w"
                              >
                                Date
                              </th>
                              <th
                                classNameName="sorting style-vHait"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Balance: activate to sort column ascending"
                                id="style-vHait"
                              >
                                Balance
                              </th>
                              <th
                                classNameName="sorting style-NdiCc"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Betting: activate to sort column ascending"
                                id="style-NdiCc"
                              >
                                Betting
                              </th>
                              <th
                                classNameName="sorting style-9Ys7h"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Transfer: activate to sort column ascending"
                                id="style-9Ys7h"
                              >
                                Transfer
                              </th>
                              <th
                                classNameName="sorting style-CRKhv"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="Active: activate to sort column ascending"
                                id="style-CRKhv"
                              >
                                Active
                              </th>
                              <th
                                classNameName="sorting style-bVW1r"
                                tabindex="0"
                                aria-controls="userList"
                                rowspan="1"
                                colspan="1"
                                aria-label="View: activate to sort column ascending"
                                id="style-bVW1r"
                              >
                                View
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" classNameName="odd">
                              <td classNameName="sorting_1">1</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/17854783367331837273503662736626592460390529362232"
                                  classNameName="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Hakai
                                </a>
                              </td>
                              <td>8770192387</td>
                              <td>N/A</td>
                              <td>23 Dec 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-17854783367331837273503662736626592460390529362232-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-17854783367331837273503662736626592460390529362232-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-17854783367331837273503662736626592460390529362232-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/17854783367331837273503662736626592460390529362232"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">2</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/61791555630892724482189433379694483713259559030221"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Sunil
                                </a>
                              </td>
                              <td>8770837193</td>
                              <td>N/A</td>
                              <td>06 Nov 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-61791555630892724482189433379694483713259559030221-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-61791555630892724482189433379694483713259559030221-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-61791555630892724482189433379694483713259559030221-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/61791555630892724482189433379694483713259559030221"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">3</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/86989454574460664563103115880514539348889845816289"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Prakash
                                </a>
                              </td>
                              <td>8400681369</td>
                              <td>N/A</td>
                              <td>03 Nov 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-86989454574460664563103115880514539348889845816289-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-86989454574460664563103115880514539348889845816289-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-86989454574460664563103115880514539348889845816289-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/86989454574460664563103115880514539348889845816289"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">4</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/02847159080022340780270879210153045202944045252354"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Jaspal Singh
                                </a>
                              </td>
                              <td>9630474689</td>
                              <td>N/A</td>
                              <td>01 Nov 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-02847159080022340780270879210153045202944045252354-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-02847159080022340780270879210153045202944045252354-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-02847159080022340780270879210153045202944045252354-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/02847159080022340780270879210153045202944045252354"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">5</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/42812114673024654136690133697702334041418462783883"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Vishnu Kumar
                                </a>
                              </td>
                              <td>6260666791</td>
                              <td>N/A</td>
                              <td>29 Oct 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-42812114673024654136690133697702334041418462783883-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-42812114673024654136690133697702334041418462783883-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-42812114673024654136690133697702334041418462783883-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/42812114673024654136690133697702334041418462783883"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">6</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/71314758138382754829162243586623564220564820735429"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  PINTU SAINI
                                </a>
                              </td>
                              <td>8619796856</td>
                              <td>N/A</td>
                              <td>13 Oct 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-71314758138382754829162243586623564220564820735429-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-71314758138382754829162243586623564220564820735429-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-71314758138382754829162243586623564220564820735429-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/71314758138382754829162243586623564220564820735429"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">7</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/55633642698454683610686225731393039311714104084126"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  DKM Bazar
                                </a>
                              </td>
                              <td>8000886861</td>
                              <td>N/A</td>
                              <td>21 Sep 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-55633642698454683610686225731393039311714104084126-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-55633642698454683610686225731393039311714104084126-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-55633642698454683610686225731393039311714104084126-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/55633642698454683610686225731393039311714104084126"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">8</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/49928392644668986916790762946182733561730781855267"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Demo Test Account
                                </a>
                              </td>
                              <td>9079373858</td>
                              <td>N/A</td>
                              <td>21 Sep 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-49928392644668986916790762946182733561730781855267-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-49928392644668986916790762946182733561730781855267-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-49928392644668986916790762946182733561730781855267-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/49928392644668986916790762946182733561730781855267"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">9</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/04536500636097457223674646300968102574244830603929"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Aryan2
                                </a>
                              </td>
                              <td>7665006663</td>
                              <td>N/A</td>
                              <td>16 Sep 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-04536500636097457223674646300968102574244830603929-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-04536500636097457223674646300968102574244830603929-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-04536500636097457223674646300968102574244830603929-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/04536500636097457223674646300968102574244830603929"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">10</td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/00969421667411075808032528661360924499597576172621"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  Aryan
                                </a>
                              </td>
                              <td>7266006663</td>
                              <td>N/A</td>
                              <td>13 Sep 2023</td>
                              <td>0</td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-00969421667411075808032528661360924499597576172621-tb_user-user_id-betting_status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="danger-00969421667411075808032528661360924499597576172621-tb_user-user_id-transfer_point_status"
                                >
                                  <span className="badge badge-pill badge-soft-danger font-size-12">
                                    No
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  role="button"
                                  className="activeDeactive"
                                  id="success-00969421667411075808032528661360924499597576172621-tb_user-user_id-status"
                                >
                                  <span className="badge badge-pill badge-soft-success font-size-12">
                                    Yes
                                  </span>
                                </a>
                              </td>
                              <td>
                                <a
                                  href="https://kalyanmilanofficialmatka.in/kalyanmilan-admin/view-user/00969421667411075808032528661360924499597576172621"
                                  className="mr-3 text-primary"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="View Details"
                                >
                                  <i className="mdi mdi-eye font-size-18"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          id="userList_processing"
                          className="dataTables_processing card style-IqOyb"
                        >
                          Processing...
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="userList_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 11 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="userList_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="userList_previous"
                            >
                              <a
                                href="#"
                                aria-controls="userList"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="userList"
                                data-dt-idx="1"
                                tabindex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="userList"
                                data-dt-idx="2"
                                tabindex="0"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="userList_next"
                            >
                              <a
                                href="#"
                                aria-controls="userList"
                                data-dt-idx="3"
                                tabindex="0"
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="msg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default UserManagement;
