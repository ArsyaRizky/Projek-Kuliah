import { types } from "./../../Constants/App.constant";

const initialState = {
  department: {
    data: [
      {
        name: "MARKETING",
        status: "Active",
      },
      {
        name: "PRODUCT DEVELOPMENT & QUALITY ASSURANCE",
        status: "Active",
      },
      {
        name: "TRAINING",
        status: "Active",
      },
      {
        name: "FINANCE",
        status: "Active",
      },
      {
        name: "OPERATIONAL",
        status: "Active",
      },
      {
        name: "CONSULTANT",
        status: "Active",
      },
    ],
    loading: false,
    error: null,
  },
  kodeProsedur: {
    data: [
      { name: "01.01 Visi, Misi & Tata Nilai", status: "Active" },
      { name: "01.02 Program Kerja & KPI", status: "Active" },
      { name: "01.03 Anggaran Tahunan", status: "Active" },
      { name: "01.04 Man Power Planning", status: "Active" },
      { name: "02.01 Struktur Organisasi", status: "Active" },
      { name: "02.02 Tugas & Tanggungjawab Organisasi", status: "Active" },
      { name: "02.03 SOP Pengendalian Dokumen", status: "Active" },
      { name: "03.01 SOP Pemasaran Program", status: "Active" },
      { name: "03.02 SOP Pengelolaan Pelanggan", status: "Active" },
      {
        name: "04.01 SOP Administrasi Penerimaan dan Konsultasi Pra Pelanggan",
        status: "Active",
      },
      { name: "05.01 SOP Proses Pelatihan", status: "Active" },
      {
        name: "06.01 SOP Pengelolaan & Proses Jasa Konsultasi",
        status: "Active",
      },
      { name: "07.01 SOP Pengembangan Program", status: "Active" },
      { name: "07.02 SOP Pengembangan Modul", status: "Active" },
      { name: "08.01 SOP Rekruitment & Seleksi SDM", status: "Active" },
      { name: "08.02 SOP Pengembangan SDM", status: "Active" },
      { name: "08.03 SOP Administrasi Kepegawaian", status: "Active" },
      {
        name: "09.01 SOP Pengembangan & Pengelolaan Software & Hardware",
        status: "Active",
      },
      { name: "09.02 SOP Pengembangan Aplikasi", status: "Active" },
      { name: "10.01 SOP Seleksi Supplier & Pengadaan", status: "Active" },
      { name: "10.02 SOP Pengelolaan Sarana & Prasarana", status: "Active" },
      { name: "11.01 SOP Budgeting & Realisasi Dana", status: "Active" },
      { name: "11.02 SOP Pelaporan Keuangan", status: "Active" },
      { name: "11.03 SOP Akad & Invoice", status: "Active" },
      { name: "12.01 SOP Audit Internal", status: "Active" },
      { name: "12.02 SOP Tinjauan Manajemen", status: "Active" },
      { name: "12.03 SOP Penanganan Keluhan", status: "Active" },
      { name: "12.04 SOP Evaluasi Kepuasan Pelanggan", status: "Active" },
      { name: "13.01 SOP Tindakan Korektif", status: "Active" },
    ],
    loading: false,
    error: null,
  },
  kategori: {
    data: [
      {
        name: "SOP",
        status: "Active",
      },
      {
        name: "WI",
        status: "Active",
      },
      {
        name: "FORM",
        status: "Active",
      },
      {
        name: "STANDAR",
        status: "Active",
      },
    ],
    loading: false,
    error: null,
  },
  userAkses: {
    data: [
      {
        username: "ayam",
        email: "ayam@gmail.com",
        level: "Admin",
        department: "MARKETING",
        nama_lengkap: "ayam jago",
      },
    ],
    loading: false,
    error: null,
  },
  uppOnline: {
    data: [
      {
        tanggal_upp: "21/10/2021",
        department: "MARKETING",
        pengaju: "ayam",
        email_pengaju: "ayam@ayam.com",
        manager_approval: "ayam",
        email_manager_approval: "ayam@ayam.com",
        kategori: "SOP",
        kode_prosedur: "01.01 Visi, Misi & Tata Nilai",
        nama_dokumen: "ayam",
        sebelum_perubahan: "ayam",
        setelah_perubahan: "ayam",
        alasan: "ayam",
        attachment: "ayam",
        tanggal_permohonan: "21/10/2021",
        email_approval_pic_1: "ayam@ayam.com",
        tanggal_approval_pic_1: "21/10/2021",
        tanggal_reject_pic_1: "21/10/2021",
        alasan_reject_pic_1: "ayam",
        email_approval_pic_2: "ayam@ayam.com",
        tanggal_approval_pic_2: "21/10/2021",
        tanggal_reject_pic_2: "21/10/2021",
        alasan_reject_pic_2: "ayam",
        email_approval_pic_3: "ayam@ayam.com",
        tanggal_approval_pic_3: "21/10/2021",
        tanggal_reject_pic_3: "21/10/2021",
        alasan_reject_pic_3: "ayam",
        tanggal_sosialisasi: "21/10/2021",
        attachment_prosedur: "ayam",
        revisi: "ayam",
        tanggal_revisi: "21/10/2021",
        evaluasi_kepuasan: "ayam",
        alasan_not_ok: "ayam",
      },
    ],
    loading: false,
    error: null,
  },

  currentAkses: {
    data: null,

    loading: false,
    error: null,
  },
};

const departmentState = (state = initialState.department, action) => {
  switch (action.type) {
    case types.SET_DEPARTMENT_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_DEPARTMENT_SUCCESS:
      return {
        ...state,

        data: [...state.data, { ...action.data }],
        loading: false,
      };

    case types.SET_DEPARTMENT_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const prosedurKodeState = (state = initialState.kodeProsedur, action) => {
  switch (action.type) {
    case types.SET_PROSEDUR_KODE_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_PROSEDUR_KODE_SUCCESS:
      return {
        ...state,

        data: [...state.data, { ...action.data }],
        loading: false,
      };

    case types.SET_PROSEDUR_KODE_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const prosedurKategoriState = (state = initialState.kategori, action) => {
  switch (action.type) {
    case types.SET_PROSEDUR_KATEGORI_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_PROSEDUR_KATEGORI_SUCCESS:
      return {
        ...state,

        data: [...state.data, { ...action.data }],
        loading: false,
      };

    case types.SET_PROSEDUR_KATEGORI_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const aksesUserState = (state = initialState.userAkses, action) => {
  switch (action.type) {
    case types.SET_USER_AKSES_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_USER_AKSES_SUCCESS:
      return {
        ...state,

        data: [...state.data, { ...action.data }],
        loading: false,
      };

    case types.SET_USER_AKSES_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const UPPOnlineState = (state = initialState.uppOnline, action) => {
  switch (action.type) {
    case types.SET_UPP_ONLINE_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_UPP_ONLINE_SUCCESS:
      return {
        ...state,

        data: [...state.data, { ...action.data }],
        loading: false,
      };

    case types.SET_UPP_ONLINE_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const currentUserState = (state = initialState.currentAkses, action) => {
  switch (action.type) {
    case types.SET_CURRENT_AKSES_LOADING:
      return {
        ...state,

        loading: true,
      };

    case types.SET_CURRENT_AKSES_SUCCESS:
      return {
        ...state,

        data: action.data,
        loading: false,
      };

    case types.SET_CURRENT_AKSES_FAILED:
      return {
        ...state,

        data: [],
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export {
  prosedurKodeState,
  departmentState,
  prosedurKategoriState,
  aksesUserState,
  currentUserState,
  UPPOnlineState,
  initialState,
};
